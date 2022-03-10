import {Service} from "typedi";

@Service()
export class TestSibling {
    public run(): boolean {
        return true;
    }
}
