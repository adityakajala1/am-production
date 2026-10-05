import React from 'react';
import { Shield, Lock } from 'lucide-react';

export const LegalPages: React.FC<{ type: 'privacy' | 'terms' }> = ({ type }) => {
  if (type === 'privacy') {
    return (
      <div className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center gap-3 text-[#e73213]">
            <Shield className="w-8 h-8" />
            <h1 className="text-3xl font-extrabold text-white uppercase font-['Syne']">
              PRIVACY POLICY
            </h1>
          </div>
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            Last Updated: October 2025 • AM PRODUCTION Live Entertainment Pvt. Ltd.
          </p>

          <div className="space-y-4 text-sm text-neutral-300 leading-relaxed border-t border-white/10 pt-6">
            <h3 className="text-base font-bold text-white uppercase">1. Information We Collect</h3>
            <p>
              When you submit an event enquiry, artist booking request, or contact form through AM PRODUCTION, we collect your name, organization, email address, contact telephone, and event project specifications.
            </p>

            <h3 className="text-base font-bold text-white uppercase">2. Use of Information</h3>
            <p>
              All client information is strictly utilized to engineer technical stage proposals, coordinate artist advancing riders, provide itemized financial estimates, and maintain operational communications regarding live events.
            </p>

            <h3 className="text-base font-bold text-white uppercase">3. Non-Disclosure & Confidentiality</h3>
            <p>
              AM PRODUCTION routinely executes NDA agreements for unannounced tours, secret artist lineups, and proprietary brand product reveals. We do not sell, rent, or leak confidential event dossiers to any third-party marketing entities.
            </p>

            <h3 className="text-base font-bold text-white uppercase">4. Security Standards</h3>
            <p>
              Our communication and proposal engines employ SSL/TLS encryption protocols to protect your proprietary stage drawings and event budgets.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6">
        <div className="flex items-center gap-3 text-[#e73213]">
          <Lock className="w-8 h-8" />
          <h1 className="text-3xl font-extrabold text-white uppercase font-['Syne']">
            TERMS & CONDITIONS
          </h1>
        </div>
        <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
          Last Updated: October 2025 • AM PRODUCTION Live Entertainment Pvt. Ltd.
        </p>

        <div className="space-y-4 text-sm text-neutral-300 leading-relaxed border-t border-white/10 pt-6">
          <h3 className="text-base font-bold text-white uppercase">1. Scope of Engagement</h3>
          <p>
            All production services, audio rentals, truss rigging, LED displays, and artist bookings provided by AM PRODUCTION are governed by formal Statement of Work (SOW) documents and site safety protocols signed by both parties.
          </p>

          <h3 className="text-base font-bold text-white uppercase">2. Site Access & Safety Compliance</h3>
          <p>
            Clients and venues must provide certified load-in windows and electrical grounding compliance as specified in AM PRODUCTION’s advance technical riders. AM PRODUCTION reserves the right to halt operations in severe weather conditions exceeding engineered wind-load ratings.
          </p>

          <h3 className="text-base font-bold text-white uppercase">3. Intellectual Property</h3>
          <p>
            Original 3D stage scenography renders, lighting cue programming, and proprietary CAD drawings designed by AM PRODUCTION remain the intellectual property of AM PRODUCTION unless expressly assigned under contract.
          </p>

          <h3 className="text-base font-bold text-white uppercase">4. Statutory Permits & Clearances</h3>
          <p>
            Unless turnkey government liaison is contracted, clients retain responsibility for municipal entertainment taxes, police performance licenses, and environmental decibel curfew clearances.
          </p>
        </div>
      </div>
    </div>
  );
};
