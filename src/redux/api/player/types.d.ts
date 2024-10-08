import { Device } from "@/types/schema";
import { AnyARecord } from "dns";

namespace PLAYER {
  type GetPlayBackStateResponse = any;
  type GetPlayBackStateRequest = void;
  type GetDeviceResponse = Device;
  type GetDeviceRequest = void;
}
