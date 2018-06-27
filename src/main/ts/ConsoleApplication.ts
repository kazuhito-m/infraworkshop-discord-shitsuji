import axiosBase from "axios";
import Parameters from "./infrastracture/datasource/config/Parameters";
import TestService from './application/maintenance/TestService';

export default class ConsoleApplication {
  public async run(argv: string[]) {
    const parameters = new Parameters(argv);
    parameters.analyzeArgs();
    const settings = parameters.loadSettings();

    const syncRemover = new TestService(axiosBase, settings);
    syncRemover.test();
  }
}
