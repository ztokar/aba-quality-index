import type { ReactNode } from "react";

export function PolicyPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="text-sm text-gray-500 mt-3">Last updated: March 2026</p>
        </div>
      </section>
      <section className="py-12 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-custom">
          {children}
        </div>
      </section>
    </>
  );
}
