import { useRef, useState, type PointerEvent } from "react";
import { experience, profile, skills, type Job } from "../data";
import ResumeDownload from "./ResumeDownload";
import "./Experience.css";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Positions on the chart are month counts from January of the first year on the axis.
interface TimelineJob extends Job {
  from: number;
  to: number;
}

function parseMonth(value: string) {
  const [year, month] = value.split("-").map(Number);
  return { year, month: month - 1 };
}

const firstYear = Math.min(...experience.map((j) => parseMonth(j.start).year));
const lastYear = Math.max(...experience.map((j) => parseMonth(j.end).year));
const years = Array.from(
  { length: lastYear - firstYear + 1 },
  (_, i) => firstYear + i,
);
const SPAN = years.length * 12;

function toPosition(value: string) {
  const { year, month } = parseMonth(value);
  return (year - firstYear) * 12 + month;
}

const jobs: TimelineJob[] = experience
  .map((job) => ({
    ...job,
    from: toPosition(job.start),
    to: toPosition(job.end),
  }))
  .sort((a, b) => a.from - b.from);

const MIN = Math.min(...jobs.map((j) => j.from));
const MAX = Math.max(...jobs.map((j) => j.to));
const allSkills = Object.values(skills).flat();

const pct = (months: number) => `${(months / SPAN) * 100}%`;
const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));
const midpoint = (job: TimelineJob) => Math.round((job.from + job.to) / 2);
const formatMonth = (position: number) =>
  `${MONTHS[position % 12]} ${firstYear + Math.floor(position / 12)}`;

function formatDuration(months: number) {
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts = [];
  if (y) parts.push(`${y} ${y === 1 ? "yr" : "yrs"}`);
  if (m) parts.push(`${m} ${m === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}

export default function Experience() {
  const [position, setPosition] = useState(MAX);
  // Stepping past the most recent role shows a "next role" pitch in place of a job.
  const [pitching, setPitching] = useState(false);
  const dragging = useRef(false);

  // The most recent job started on or before the marker. It is only the active job if
  // the marker hasn't passed its end; otherwise the marker sits in a gap between roles.
  const lastStarted = jobs.reduce(
    (found, job, i) => (job.from <= position ? i : found),
    0,
  );
  const activeIndex =
    !pitching && position <= jobs[lastStarted].to ? lastStarted : -1;
  const active = activeIndex >= 0 ? jobs[activeIndex] : null;
  const usedSkills = new Set(pitching ? allSkills : active?.skills);

  // Any move along the timeline leaves the pitch and goes back to showing roles.
  const moveTo = (months: number) => {
    setPitching(false);
    setPosition(clamp(months, MIN, MAX));
  };

  // Rows span the full chart width, so a row or the rows container gives the same answer.
  const seek = (clientX: number, track: HTMLElement) => {
    const rect = track.getBoundingClientRect();
    const months = Math.round(((clientX - rect.left) / rect.width) * SPAN);
    moveTo(months);
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    seek(e.clientX, e.currentTarget);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    // A release outside the window can go unreported, so stop once the button is no longer held.
    if (!(e.buttons & 1)) dragging.current = false;
    if (dragging.current) seek(e.clientX, e.currentTarget);
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  const goTo = (index: number) =>
    moveTo(midpoint(jobs[clamp(index, 0, jobs.length - 1)]));
  const previousIndex = pitching
    ? jobs.length - 1
    : active
      ? activeIndex - 1
      : lastStarted;
  const nextIndex = lastStarted + 1;

  const goNext = () => {
    if (nextIndex < jobs.length) {
      goTo(nextIndex);
    } else {
      setPosition(MAX);
      setPitching(true);
    }
  };

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Work experience</h2>

        <div className="gantt">
          <div>
            <div className="gantt__years" aria-hidden="true">
              {years.map((year, i) => (
                <div className="gantt__year" key={year}>
                  <span className="gantt__year-full">{year}</span>
                  <span className="gantt__year-short">
                    {i % 2 === 0 ? `'${String(year).slice(2)}` : ""}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="gantt__rows"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={stopDragging}
              onPointerCancel={stopDragging}
              onLostPointerCapture={stopDragging}
            >
              <div className="gantt__grid" aria-hidden="true">
                {years.map((year) => (
                  <div key={year} />
                ))}
              </div>
              {jobs.map((job, i) => {
                // Bars that run to the right edge have no room beside them, so label those inside.
                const inside = job.to / SPAN > 0.75;
                return (
                  <button
                    type="button"
                    key={job.company}
                    className={`gantt__row${i === activeIndex ? " gantt__row--active" : ""}`}
                    // Keyboard activation has no pointer position, so it jumps to the middle of the role.
                    onClick={(e) =>
                      e.detail === 0
                        ? goTo(i)
                        : seek(e.clientX, e.currentTarget)
                    }
                    aria-label={`${job.company}, ${job.dates}`}
                    aria-pressed={i === activeIndex}
                  >
                    <span
                      className="gantt__bar"
                      style={{
                        left: pct(job.from),
                        width: pct(job.to - job.from),
                      }}
                    />
                    <span
                      className={`gantt__label${inside ? " gantt__label--inside" : ""}`}
                      style={{ left: pct(inside ? job.from : job.to) }}
                    >
                      {job.company}
                    </span>
                  </button>
                );
              })}
              <div
                className="gantt__marker"
                style={{ left: pct(position) }}
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="gantt__controls">
            <output className="gantt__date" htmlFor="gantt-position">
              {formatMonth(position)}
            </output>
            <div className="gantt__slider">
              <label className="section-eyebrow" htmlFor="gantt-position">
                Position on the timeline
              </label>
              <input
                id="gantt-position"
                type="range"
                min={MIN}
                max={MAX}
                step={1}
                value={position}
                onChange={(e) => moveTo(Number(e.target.value))}
                aria-valuetext={formatMonth(position)}
              />
            </div>
          </div>
        </div>

        <article className="role">
          <div className="role__body">
            {pitching ? (
              <>
                <p className="section-eyebrow section-eyebrow--accent">
                  Next role · Open
                </p>
                <h3 className="role__company">Your team?</h3>
                <p className="role__gap">
                  I'm currently open to new opportunities. Looking for senior
                  full-stack roles, ideally React and/or Node, but everything on
                  the skills list comes with me and I'm adding new skills all
                  the time.
                </p>
                <div className="role__nav">
                  <a
                    href={`mailto:${profile.email}`}
                    className="btn btn-accent"
                  >
                    {profile.email}
                  </a>
                  <ResumeDownload className="btn btn-ghost" />
                </div>
              </>
            ) : active ? (
              <>
                <p className="section-eyebrow section-eyebrow--accent">
                  Role {activeIndex + 1} of {jobs.length} · {active.location}
                </p>
                <h3 className="role__company">{active.company}</h3>
                <p className="role__title">{active.title}</p>
                <p className="role__meta">
                  {active.dates} · {formatDuration(active.to - active.from)}
                </p>
                <ul className="role__bullets">
                  {active.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <p className="section-eyebrow section-eyebrow--accent">
                  {formatMonth(position)} · Between roles
                </p>
                <h3 className="role__company">Between roles.</h3>
                <p className="role__gap">
                  No role at this point on the timeline, between{" "}
                  {jobs[lastStarted].company} (
                  {formatMonth(jobs[lastStarted].to)}) and{" "}
                  {jobs[nextIndex].company} ({formatMonth(jobs[nextIndex].from)}
                  ).
                </p>
              </>
            )}
            <div className="role__nav">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => goTo(previousIndex)}
                disabled={previousIndex < 0}
              >
                Earlier role
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={goNext}
                disabled={pitching}
              >
                Next role
              </button>
            </div>
          </div>
          <div className="role__skills" id="skills">
            <p className="section-eyebrow">Skills</p>
            <ul className="role__chips">
              {allSkills.map((skill) => (
                <li
                  className={`chip${usedSkills.has(skill) ? " chip--on" : ""}`}
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
