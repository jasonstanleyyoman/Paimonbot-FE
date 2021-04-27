interface Message  {
    sender: "bot" | "self",
    sent: Date,
    message?: string,
    type : "text" | "sticker",
    image?: string
}

export type {
    Message
}