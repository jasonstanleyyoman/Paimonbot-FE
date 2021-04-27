interface Message  {
    sender: "bot" | "self",
    sent: Date,
    message: string
}

export type {
    Message
}