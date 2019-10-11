export interface Message {
    id: number;
    senderId: number;
    senderKnownAs: string;
    senderPhotoUrl: number;
    recipientId: number;
    recipientKnownAs: string;
    recipientPhotoUrl: number;
    content: string;
    isRead: boolean;
    dateRead: Date;
    messageSent: Date;
}
