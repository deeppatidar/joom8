/* * * ./app/comments/model/comment.ts * * */
export class Collection {

    private collectionId: number;
    private image: string;
    private url:string;
    private title:string;
    private description:string;

      static getCollection(responseData) {
        var obj = new Collection();
        obj.setCollectionId(responseData.collection_id);
        obj.setImage_url(responseData.image_url);
        obj.setUrl(responseData.url);
        obj.setTitle(responseData.title);
        obj.setDescription(responseData.description);
        return obj;
      };

      //can be use if we want to initialize using constructor from ataptor class
      // constructor(this.collectionId: number, this.image: string, this.url:string, this.title:string, this.description:string){
      //   this.collectionId = collectionId;
      //   this.image = image;
      //   this.url = url;
      //   this.title = title;
      //   this.description = description;
      // };
      public getCollection_id() {
        return this.collectionId;
      };

      public setCollectionId(c) {
        this.collectionId = c;
      };

      public getImage_url() {
        return this.image;
      };

      public setImage_url(imageUrl) {
        this.image = imageUrl;
      };

      public setCollection_id
      public getUrl() {
        return this.url;
      };

      public setUrl(u) {
        var index = u.indexOf('com')+3;
        var u = u.substring(index, u.indexOf('?'));
        this.url = u.substring(index, u.indexOf('?'));
      };

      public getTitle() {
        return this.title;
      };

      public setTitle(t) {
        this.title = t;
      };

      public getDescription() {
        return this.description.substring(0, 20);
      };

      public setDescription(desc) {
        this.description = desc ;
      };

}
