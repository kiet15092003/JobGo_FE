import axios from "axios";
import { GetAllSkillFilterDto, GetAllSkillResponeDto } from "../../types/skill/skill";

export async function getAllSkill(params:GetAllSkillFilterDto): Promise<GetAllSkillResponeDto> {
    const res = await axios.get<GetAllSkillResponeDto>("http://localhost:3000/skill/getAll", {
        params
    })
    return res.data
}