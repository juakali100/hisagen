"use client";

import { useState } from "react";
import { Contact } from "../../types/opportunities";

interface ContactManagerProps {
  contacts: Contact[];
  onUpdate?: (contacts: Contact[]) => void;
  readonly?: boolean;
}

const emptyContact: Omit<Contact, "id"> = {
  name: "",
  role: "",
  organization: "",
  email: "",
  phone: "",
  linkedIn: "",
  notes: "",
  isPrimary: false,
};

export default function ContactManager({ contacts, onUpdate, readonly = false }: ContactManagerProps) {
  const [localContacts, setLocalContacts] = useState<Contact[]>(contacts);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Contact, "id">>(emptyContact);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    if (editingId) {
      const updated = localContacts.map((c) =>
        c.id === editingId ? { ...formData, id: editingId } : c
      );
      setLocalContacts(updated);
      onUpdate?.(updated);
      setEditingId(null);
    } else {
      const newContact: Contact = {
        ...formData,
        id: `contact-${Date.now()}`,
      };
      const updated = [...localContacts, newContact];
      setLocalContacts(updated);
      onUpdate?.(updated);
      setIsAdding(false);
    }
    setFormData(emptyContact);
  };

  const handleEdit = (contact: Contact) => {
    setFormData({ ...contact });
    setEditingId(contact.id);
    setIsAdding(true);
  };

  const handleDelete = (contactId: string) => {
    const updated = localContacts.filter((c) => c.id !== contactId);
    setLocalContacts(updated);
    onUpdate?.(updated);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormData(emptyContact);
  };

  const setPrimary = (contactId: string) => {
    const updated = localContacts.map((c) => ({
      ...c,
      isPrimary: c.id === contactId,
    }));
    setLocalContacts(updated);
    onUpdate?.(updated);
  };

  return (
    <div className="p-4 rounded-lg border border-mist">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60">Contacts</p>
        {!readonly && !isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="text-xs font-medium text-primary hover:text-primary/80"
          >
            + Add Contact
          </button>
        )}
      </div>

      {/* Contact List */}
      {localContacts.length > 0 ? (
        <div className="space-y-2 mb-4">
          {localContacts.map((contact) => (
            <div
              key={contact.id}
              className={`p-3 rounded bg-slate-50 border ${
                contact.isPrimary ? "border-primary/30 bg-primary/5" : "border-slate-200"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-secondary">{contact.name}</p>
                    {contact.isPrimary && (
                      <span className="text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-primary/20 text-primary">
                        Primary
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate">
                    {contact.role} {contact.organization && `• ${contact.organization}`}
                  </p>
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-xs text-primary hover:underline block mt-1"
                    >
                      {contact.email}
                    </a>
                  )}
                  {contact.phone && <p className="text-xs text-slate">{contact.phone}</p>}
                  {contact.linkedIn && (
                    <a
                      href={contact.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline block"
                    >
                      LinkedIn →
                    </a>
                  )}
                  {contact.notes && <p className="text-xs text-slate/70 mt-2 italic">{contact.notes}</p>}
                </div>
                {!readonly && (
                  <div className="flex items-center gap-2 ml-2">
                    {!contact.isPrimary && (
                      <button
                        onClick={() => setPrimary(contact.id)}
                        className="text-[10px] text-slate hover:text-primary"
                        title="Set as primary"
                      >
                        ★
                      </button>
                    )}
                    <button
                      onClick={() => handleEdit(contact)}
                      className="text-[10px] text-slate hover:text-primary"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="text-[10px] text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        !isAdding && <p className="text-sm text-slate/60 italic mb-4">No contacts added yet</p>
      )}

      {/* Add/Edit Form */}
      {isAdding && (
        <form onSubmit={handleSubmit} className="p-4 rounded-lg bg-white border border-primary/20">
          <p className="text-xs font-bold text-secondary mb-3">
            {editingId ? "Edit Contact" : "Add New Contact"}
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
                Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Jane Smith"
                required
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
                Role
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Program Officer"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
                Organization
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Funder Name"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="jane@funder.org"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
                LinkedIn
              </label>
              <input
                type="url"
                value={formData.linkedIn}
                onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="https://linkedin.com/in/..."
              />
            </div>
          </div>

          <div className="mt-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
              Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary"
              rows={2}
              placeholder="Any notes about this contact..."
            />
          </div>

          <div className="mt-3 flex items-center gap-2">
            <input
              type="checkbox"
              id="isPrimary"
              checked={formData.isPrimary}
              onChange={(e) => setFormData({ ...formData, isPrimary: e.target.checked })}
              className="rounded border-slate-300 text-primary focus:ring-primary/20"
            />
            <label htmlFor="isPrimary" className="text-xs text-slate">
              Primary contact for this opportunity
            </label>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 text-xs font-medium bg-primary text-white rounded hover:bg-primary/90"
            >
              {editingId ? "Save Changes" : "Add Contact"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 text-xs font-medium text-slate hover:text-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
