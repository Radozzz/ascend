import SkillTree from "@/components/SkillTree";

const demo = {
  nodes: [
    { id: 'b-force', label: 'Force' },
    { id: 'n-pompes10', label: '10 pompes' },
    { id: 'n-pompes20', label: '20 pompes' },
    { id: 'n-tractions5', label: '5 tractions' },
    { id: 'n-bench60', label: 'Bench 60kg' }
  ],
  edges: [
    { from: 'b-force', to: 'n-pompes10' },
    { from: 'n-pompes10', to: 'n-pompes20' },
    { from: 'n-pompes20', to: 'n-tractions5' },
    { from: 'n-tractions5', to: 'n-bench60' }
  ]
}

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl p-6 space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Ascend</h1>
        <p className="text-gray-600">Monter de niveau, pour de vrai.</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Mon arbre</h2>
        <SkillTree nodes={demo.nodes} edges={demo.edges} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Quête du jour</h2>
        <div className="rounded-2xl border p-4">
          <p className="font-medium">Faire 3× max pompes (repos 90s)</p>
          <button className="mt-3 rounded-xl border px-4 py-2">Valider</button>
        </div>
      </section>
    </main>
  );
}
