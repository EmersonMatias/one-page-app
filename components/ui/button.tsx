export default function Button({ name }: { name: string }) {
    return (
        <button className="bg-violet-500 text-lg px-20 py-3 rounded-xl hover:bg-violet-900">
            {name}
        </button>
    )
}