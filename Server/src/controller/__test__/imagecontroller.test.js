import '@babel/polyfill';
import  { expect } from 'chai'
import Imagecontroller from 'controller/imagecontroller'
import response from './mockresponse'
import assertionvalue, {ButtonInfo} from './assertionvalue'
import nock from 'nock';
import config from 'config';


describe('Imagecontroller Test', function(){
    const searchText = "Mars";
    const page = 1;
    let data = null;
    nock(config.NASA_IMAGE.baseURL)
    .get(`/search?media_type=image&q=${encodeURIComponent(searchText)}&page=${page}`)
    .reply(200, response);

    const obj = new Imagecontroller(searchText, page);

    
    it('should ImageController init', function(){
        expect(obj.searchText).equal(searchText)
        expect(obj.page).equal(page)
    })

    it('should fetch data', async ()=>{
        data = await obj.fetchData();
        expect(response).to.deep.equal(data);
    })

    it('should filter info', async ()=>{
        const items = data.collection.items;
        const result = obj.getImageinfo(items);
        expect(result).to.deep.equal(assertionvalue);
    })

    it('should filter button info', async ()=>{
        const links = data.collection.links;
        const result = obj.getButtonInfo(links);
        expect(result).to.deep.equal(ButtonInfo);
    })


    
});