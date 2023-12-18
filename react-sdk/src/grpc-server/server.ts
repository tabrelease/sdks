import {EvaluationClient} from "../generated/EvaluationServiceClientPb"

const HOSTNAME = process.env.REACT_APP_SERVER_HOSTNAME || "http://localhost:8080"

// gRPC Servers
export const EvaluationServer = new EvaluationClient(HOSTNAME)