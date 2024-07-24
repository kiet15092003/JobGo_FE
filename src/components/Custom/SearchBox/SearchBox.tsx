import { Autocomplete, AutocompleteProps, Box, Divider, Grid, TextField, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import NormalButton from "../Button/NormalButton";
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { GetAllSkillFilterDto, GetAllSkillResponeDto, Skill } from "../../../types/skill/skill";
import { getAllSkill } from "../../../services/skillService/skillService";
import { Address, GetAllAddressFilterDto, GetAllAddressResponeDto } from "../../../types/skill/address";
import { getAllAddress } from "../../../services/addressService/addressService";

export const SearchBox: React.FC = () => {
    const [skillValue, setSkillValue] = React.useState<string | null>(null);
    const [inputSkillValue, setInputSkillValue] = React.useState('');

    const [locationValue, setLocationValue] = React.useState<string | null>(null);
    const [inputLocationValue, setInputLocationValue] = React.useState('');

    const [inputSearchValue, setInputSearchValue] = React.useState<string | null>(null)
    const theme = useTheme();
    const [skills, setSkills] = React.useState<Skill[]>([])
    const [address, setAddress] = React.useState<Address[]>([])
    const [skillOptions, setSkillOptions] = React.useState<{ label: string, value: Skill }[]>([]);    
    const [locationOptions, setLocationOptions] = React.useState<{label: string, value: Address}[]>([]);

    const fetchSkills = async () => {
        const params: GetAllSkillFilterDto = {};
        try {
            const res: GetAllSkillResponeDto = await getAllSkill(params);
            setSkills(res.data)
            const options = res.data.map((skill) => ({ label: skill.name, value: skill }));
            setSkillOptions(options);
        } catch (error) {
            
        }
    }
    
    const fetchAddress = async () => {
        const params: GetAllAddressFilterDto = {isDistinctCity:true};
        try {
            const res: GetAllAddressResponeDto = await getAllAddress(params);
            setAddress(res.data)
            const options = res.data.map((address) => ({ label: address.city, value: address }));
            setLocationOptions(options)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchSkills();
        fetchAddress();
    },); 

    return (
        <Grid
            container
            paddingY={1}
            sx={{
                border: '1px solid',
                borderColor: 'white',
                borderRadius: 2,
                bgcolor: 'background.paper',
                color: 'text.secondary',
                boxShadow: '0px 0px 64px rgba(0, 0, 0, 0.12)',
            }}
        >
            <Grid item xs={3} container justifyContent="center" alignItems="center" paddingLeft={1}>
                <Autocomplete
                    value={skillValue}
                    onChange={(event, newValue) => {
                        setSkillValue(newValue);
                    }}
                    inputValue={inputSkillValue}
                    onInputChange={(event, newInputValue) => {
                        setInputSkillValue(newInputValue);
                    }}
                    options={skillOptions.map((option) => option.label)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={skillValue || inputSkillValue ? '' : 'Skill'}
                            variant="standard"
                            InputProps={{
                                ...params.InputProps,
                                disableUnderline: true,
                                startAdornment: (
                                    <WorkOutlineOutlinedIcon />
                                ),
                            }}
                            InputLabelProps={{
                                ...params.InputLabelProps,
                                shrink: Boolean(inputSkillValue || skillValue),
                                style: { marginLeft: '30px' },
                            }}
                        />
                    )}
                    sx={{ width: '100%' }}
                />
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid container item xs={3} justifyContent="center" alignItems="center" paddingLeft={1}>
                <Autocomplete
                    value={locationValue}
                    onChange={(event, newValue) => {
                        setLocationValue(newValue);
                    }}
                    inputValue={inputLocationValue}
                    onInputChange={(event, newInputValue) => {
                        setInputLocationValue(newInputValue);
                    }}
                    options={locationOptions.map((option) => option.label)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={locationValue || inputLocationValue ? '' : 'Location'}
                            variant="standard"
                            InputProps={{
                                ...params.InputProps,
                                disableUnderline: true,
                                startAdornment: (
                                    <FmdGoodOutlinedIcon/>
                                  ),
                            }}
                            InputLabelProps={{
                                ...params.InputLabelProps,
                                shrink: Boolean(inputLocationValue || locationValue),
                                style: { marginLeft: '30px' },
                            }}
                        />
                    )}
                    sx={{ width: '100%' }}
                />
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem/>
            <Grid container item xs={3} justifyContent="center" alignItems="center" paddingLeft={1}>
                <TextField
                    sx={{ width: '100%' }}
                    value={inputSearchValue}
                    onChange={(event) => setInputSearchValue(event.target.value)}
                    label={inputSearchValue ? '' : 'Search here'}
                    variant="standard"
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <CreateOutlinedIcon/>
                        ),
                        
                    }}
                    InputLabelProps={{
                        shrink: Boolean(inputSearchValue),
                        style: { marginLeft: '30px' },
                    }}
                />
            </Grid>
            <Grid container item xs={2.9} justifyContent="center" alignItems="center">
                <NormalButton
                    isCanHover = {true}
                    startIcon={<SearchIcon/>}
                    width="125px"
                    text="Search"
                    textColor="#ffffff"
                    textHoverColor="#ffffff"
                    backgroundColor={theme.palette.primary.dark}
                    borderColor={theme.palette.primary.dark}
                    borderHoverColor={theme.palette.primary.main}
                    backgroundHoverColor={theme.palette.primary.main}
                />
            </Grid>
        </Grid>
    );
}