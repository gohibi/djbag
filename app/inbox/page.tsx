import Conversation from "../components/inbox/Conversation";

const InboxPage = () => {
    return (
        <main className="max-w-[1700px] mx-auto px-6 pb-6 space-y-4">
            <h3 className="my-6 text-3xl">Inbox</h3>
                

                <Conversation />
                <Conversation />
                <Conversation />
        </main>
    )
}

export default InboxPage;