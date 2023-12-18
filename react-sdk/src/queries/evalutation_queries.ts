import {EvaluationInput} from "../generated/evaluation_pb";
import {EvaluationServer} from "../grpc-server/server";

export const listEvaluationFlags = async (userId: string, tenantId: string) => {
    const request = new EvaluationInput();
    request.setUserId(userId);
    request.setTenantId(tenantId);
    return await EvaluationServer.listEvaluationFlags(request);
}
