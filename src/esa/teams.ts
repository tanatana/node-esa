import Client from './client'
export default class Teams {
    constructor(private client: Client){
    }
    teams() : void {
        this.client.getJSON("");
    }
    stats() : Promise<any> {
        return this.client.getJSON("/stats").catch(_ => {
            return Promise.reject(_);
        });
    }
    members() : Promise<any> {
        return this.client.getJSON("/members").catch(_ => {
            return Promise.reject(_);
        });
    }
    posts() : Promise<any> {
        return this.client.getJSON("/posts").catch(_ => {
            return Promise.reject(_);
        });
    }
    post(postId: string) : Promise<any> {
        return this.client.getJSON(`/posts/${postId}`).catch(_ => {
            return Promise.reject(_);
        });
    }

    // POST /v1/teams/:team_name/posts
    // create a new post.

    // PATCH /v1/teams/:team_name/posts/:post_number
    // edit the post.

    // DELETE /v1/teams/:team_name/posts/:post_number
    // delete the post.


    comments(postId: string) : Promise<any> {
        return this.client.getJSON(`/posts/${postId}/comments`).catch(_ => {
            return Promise.reject(_);
        });
    }

    comment(commentId: string) : Promise<any> {
        return this.client.getJSON(`/comments/${commentId}`).catch(_ => {
            return Promise.reject(_);
        });
    }

    // POST /v1/teams/:team_name/posts/:post_number/comments
    // 記事に新しいコメントを作成します。
    // PATCH /v1/teams/:team_name/comments/:comment_id
    // 指定されたコメントを更新します。
    // DELETE /v1/teams/:team_name/comments/:comment_id
    // 指定されたコメントを削除します。
}
