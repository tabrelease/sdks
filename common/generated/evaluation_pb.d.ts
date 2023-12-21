import * as jspb from 'google-protobuf'



export class EvaluationInput extends jspb.Message {
  getTenantId(): string;
  setTenantId(value: string): EvaluationInput;

  getUserId(): string;
  setUserId(value: string): EvaluationInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluationInput.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluationInput): EvaluationInput.AsObject;
  static serializeBinaryToWriter(message: EvaluationInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluationInput;
  static deserializeBinaryFromReader(message: EvaluationInput, reader: jspb.BinaryReader): EvaluationInput;
}

export namespace EvaluationInput {
  export type AsObject = {
    tenantId: string,
    userId: string,
  }
}

export class EvaluationFlag extends jspb.Message {
  getName(): string;
  setName(value: string): EvaluationFlag;

  getEnabled(): boolean;
  setEnabled(value: boolean): EvaluationFlag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluationFlag.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluationFlag): EvaluationFlag.AsObject;
  static serializeBinaryToWriter(message: EvaluationFlag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluationFlag;
  static deserializeBinaryFromReader(message: EvaluationFlag, reader: jspb.BinaryReader): EvaluationFlag;
}

export namespace EvaluationFlag {
  export type AsObject = {
    name: string,
    enabled: boolean,
  }
}

export class EvaluationList extends jspb.Message {
  getEvaluationFlagList(): Array<EvaluationFlag>;
  setEvaluationFlagList(value: Array<EvaluationFlag>): EvaluationList;
  clearEvaluationFlagList(): EvaluationList;
  addEvaluationFlag(value?: EvaluationFlag, index?: number): EvaluationFlag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvaluationList.AsObject;
  static toObject(includeInstance: boolean, msg: EvaluationList): EvaluationList.AsObject;
  static serializeBinaryToWriter(message: EvaluationList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvaluationList;
  static deserializeBinaryFromReader(message: EvaluationList, reader: jspb.BinaryReader): EvaluationList;
}

export namespace EvaluationList {
  export type AsObject = {
    evaluationFlagList: Array<EvaluationFlag.AsObject>,
  }
}

export class FlagStatInput extends jspb.Message {
  getTenantId(): string;
  setTenantId(value: string): FlagStatInput;

  getUserId(): string;
  setUserId(value: string): FlagStatInput;

  getFlagId(): string;
  setFlagId(value: string): FlagStatInput;

  getEnabled(): boolean;
  setEnabled(value: boolean): FlagStatInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagStatInput.AsObject;
  static toObject(includeInstance: boolean, msg: FlagStatInput): FlagStatInput.AsObject;
  static serializeBinaryToWriter(message: FlagStatInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagStatInput;
  static deserializeBinaryFromReader(message: FlagStatInput, reader: jspb.BinaryReader): FlagStatInput;
}

export namespace FlagStatInput {
  export type AsObject = {
    tenantId: string,
    userId: string,
    flagId: string,
    enabled: boolean,
  }
}

export class noop extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): noop.AsObject;
  static toObject(includeInstance: boolean, msg: noop): noop.AsObject;
  static serializeBinaryToWriter(message: noop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): noop;
  static deserializeBinaryFromReader(message: noop, reader: jspb.BinaryReader): noop;
}

export namespace noop {
  export type AsObject = {
  }
}

