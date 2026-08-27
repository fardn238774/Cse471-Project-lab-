export default function AgentPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Agent: {params.id}</h1>
    </div>
  );
}
