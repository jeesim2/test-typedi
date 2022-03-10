import {Service} from "typedi";

@Service('TestSiblingNamed')
export class TestSiblingNamed {
    public run(): boolean {
        return true;
    }
}
