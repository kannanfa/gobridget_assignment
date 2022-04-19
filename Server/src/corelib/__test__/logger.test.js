import assert from 'chai'
import logger from 'corelib/logger'

describe('Chef test', function(){
   
    let chef = logger;
    
    it('Check logger init', function(){
        logger.should.have.property('info')
    })
 
    
});