import Client from './client';
export default class Teams {
    private client;
    constructor(client: Client);
    teams(): void;
    stats(): Promise<any>;
    members(): Promise<any>;
    posts(): Promise<any>;
    post(postId: string): Promise<any>;
    comments(postId: string): Promise<any>;
    comment(commentId: string): Promise<any>;
}
