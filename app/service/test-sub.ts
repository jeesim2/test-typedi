import {Service} from "typedi";

@Service()
export class TestSub {
    public run(): boolean {
        return true;
    }
}
