import {Container, Service} from "typedi";
import {describe} from 'mocha';
import {TestSibling} from "./test-sibling";
import {TestSub} from "./service/test-sub";
import {assert} from 'chai'


describe("Test", () => {
    it("TestSameFile", () => {
        assert.equal(Container.get(TestSameFile).run(), true)
    })
    it("TestSibling", () => {
        assert.equal(Container.get(TestSibling).run(), true)
    })
    it("TestSub", () => {
        assert.equal(Container.get(TestSub).run(), true)
    })
    it("TestSameFileNamed", () => {
        assert.equal(Container.get<any>('TestSameFileNamed').run(), true)
    })
    it("TestSiblingNamed", () => {
        assert.equal(Container.get<any>('TestSiblingNamed').run(), true)
    })
    it("TestSubNamed", () => {
        assert.equal(Container.get<any>('TestSubNamed').run(), true)
    })
})


@Service()
export class TestSameFile {
    public run(): boolean {
        return true;
    }
}

@Service('TestSameFileNamed')
export class TestSameFileNamed {
    public run(): boolean {
        return true;
    }
}
