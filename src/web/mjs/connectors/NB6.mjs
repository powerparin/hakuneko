import MangaReaderCMS from './templates/MangaReaderCMS.mjs';

export default class AMAScan extends MangaReaderCMS {

    constructor() {
        super();
        super.id = 'manga689';
        super.label = 'Manga689';
        this.tags = [ 'manga', 'webtoon', 'thai' ];
        this.url = 'http://manga689.com';
        this.path = '/manga/list-mode/';

    }
}
