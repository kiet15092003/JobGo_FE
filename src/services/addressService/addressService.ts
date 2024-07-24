import axios from "axios";
import { GetAllAddressFilterDto, GetAllAddressResponeDto } from "../../types/skill/address";

export async function getAllAddress(params:GetAllAddressFilterDto) : Promise<GetAllAddressResponeDto> {
    const res = await axios.get<GetAllAddressResponeDto>('http://localhost:3000/address/getAll', {
        params
    }) 
    return res.data
}