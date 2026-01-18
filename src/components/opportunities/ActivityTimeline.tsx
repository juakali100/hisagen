"use client";

import { useState } from "react";
import { EngagementActivity, ActivityType } from "../../types/opportunities";

interface ActivityTimelineProps {
  activities: EngagementActivity[];
  onUpdate?: (activities: EngagementActivity[]) => void;
  readonly?: boolean;
}

const activityTypes: { value: ActivityType; label: string; icon: string }[] = [
  { value: "email", label: "Email", icon: "✉" },
  { value: "call", label: "Call", icon: "📞" },
  { value: "meeting", label: "Meeting", icon: "🤝" },
  { value: "event", label: "Event", icon: "📅" },
  { value: "intro", label: "Introduction", icon: "👋" },
  { value: "submission", label: "Submission", icon: "📤" },
  { value: "other", label: "Other", icon: "📝" },
];

const emptyActivity: Omit<EngagementActivity, "id"> = {
  date: new Date().toISOString().split("T")[0],
  type: "email",
  description: "",
  participants: [],
  outcome: "",
  nextStep: "",
};

export default function ActivityTimeline({ activities, onUpdate, readonly = false }: ActivityTimelineProps) {
  const [localActivities, setLocalActivities] = useState<EngagementActivity[]>(activities);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Omit<EngagementActivity, "id">>(emptyActivity);
  const [participantInput, setParticipantInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.description.trim()) return;

    const newActivity: EngagementActivity = {
      ...formData,
      id: `activity-${Date.now()}`,
    };

    const updated = [newActivity, ...localActivities]; // Add to top (most recent first)
    setLocalActivities(updated);
    onUpdate?.(updated);
    setIsAdding(false);
    setFormData(emptyActivity);
    setParticipantInput("");
  };

  const addParticipant = () => {
    if (participantInput.trim()) {
      setFormData({
        ...formData,
        participants: [...formData.participants, participantInput.trim()],
      });
      setParticipantInput("");
    }
  };

  const removeParticipant = (index: number) => {
    setFormData({
      ...formData,
      participants: formData.participants.filter((_, i) => i !== index),
    });
  };

  const handleDelete = (activityId: string) => {
    const updated = localActivities.filter((a) => a.id !== activityId);
    setLocalActivities(updated);
    onUpdate?.(updated);
  };

  const getTypeIcon = (type: ActivityType) => {
    return activityTypes.find((t) => t.value === type)?.icon || "📝";
  };

  return (
    <div className="p-4 rounded-lg border border-mist">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60">
          Engagement History
        </p>
        {!readonly && !isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="text-xs font-medium text-primary hover:text-primary/80"
          >
            + Log Activity
          </button>
        )}
      </div>

      {/* Add Activity Form */}
      {isAdding && (
        <form onSubmit={handleSubmit} className="p-4 rounded-lg bg-white border border-primary/20 mb-4">
          <p className="text-xs font-bold text-secondary mb-3">Log New Activity</p>

          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
                Date *
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
                Type *
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as ActivityType })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                {activityTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.icon} {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
              rows={2}
              placeholder="What happened in this interaction..."
              required
            />
          </div>

          <div className="mt-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
              Participants
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={participantInput}
                onChange={(e) => setParticipantInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addParticipant())}
                className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Add participant name..."
              />
              <button
                type="button"
                onClick={addParticipant}
                className="px-3 py-2 text-sm bg-slate-100 text-slate-600 rounded hover:bg-slate-200"
              >
                Add
              </button>
            </div>
            {formData.participants.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.participants.map((p, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-slate-100 text-slate-700 rounded"
                  >
                    {p}
                    <button
                      type="button"
                      onClick={() => removeParticipant(i)}
                      className="text-slate-400 hover:text-red-500"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="mt-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
              Outcome
            </label>
            <input
              type="text"
              value={formData.outcome}
              onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="What was the result of this activity..."
            />
          </div>

          <div className="mt-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
              Next Step
            </label>
            <input
              type="text"
              value={formData.nextStep}
              onChange={(e) => setFormData({ ...formData, nextStep: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="What should happen next..."
            />
          </div>

          <div className="mt-4 flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 text-xs font-medium bg-primary text-white rounded hover:bg-primary/90"
            >
              Log Activity
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAdding(false);
                setFormData(emptyActivity);
                setParticipantInput("");
              }}
              className="px-4 py-2 text-xs font-medium text-slate hover:text-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Activity Timeline */}
      {localActivities.length > 0 ? (
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-200" />

          <div className="space-y-3">
            {localActivities.map((activity) => (
              <div key={activity.id} className="relative pl-10">
                {/* Timeline dot */}
                <div className="absolute left-2 top-3 w-5 h-5 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center text-xs">
                  {getTypeIcon(activity.type)}
                </div>

                <div className="p-3 rounded bg-slate-50 border border-slate-200 group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-secondary">{activity.date}</span>
                        <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded bg-slate-200 text-slate-600">
                          {activity.type}
                        </span>
                      </div>
                      <p className="text-sm text-slate">{activity.description}</p>
                      {activity.participants.length > 0 && (
                        <p className="text-xs text-slate/70 mt-1">
                          With: {activity.participants.join(", ")}
                        </p>
                      )}
                      {activity.outcome && (
                        <p className="text-xs text-emerald-700 mt-1">
                          <span className="font-medium">Outcome:</span> {activity.outcome}
                        </p>
                      )}
                      {activity.nextStep && (
                        <p className="text-xs text-primary mt-1">
                          <span className="font-medium">Next:</span> {activity.nextStep}
                        </p>
                      )}
                    </div>
                    {!readonly && (
                      <button
                        onClick={() => handleDelete(activity.id)}
                        className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 text-xs transition-opacity"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-sm text-slate/60 italic">No engagement activities logged yet</p>
      )}
    </div>
  );
}
