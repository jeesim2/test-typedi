import {Service} from "typedi";

@Service('TestSubNamed')
export class TestSubNamed {
    public run(): boolean {
        return true;
    }
}
