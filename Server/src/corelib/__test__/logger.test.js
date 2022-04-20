import assert, { expect } from 'chai'
import logger from 'corelib/logger'

describe('Logger Test', function(){
   
    
    it('should logger init', function(){
        const types = ["transport", "inbound", "info", "error", "debug", "trace"];
        for (let i = 0; i < types.length; i++) {
            const type = types[i];
                  expect(logger).to.have.property(type);
        }
    })
 
    
});