import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { useAppSelector } from 'app/config/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CountUp, { useCountUp } from 'react-countup';

export const Home = () => {
    const account = useAppSelector(state => state.authentication.account);

    const [age, setAge] = React.useState('');
    const [timeInfoCustomer, setTimeInfoCustomer] = React.useState(false);
    const [timeInfoNews, setTimeInfoNews] = React.useState(false);
    const [timeInfoLuotXem, setTimeInfoLuotXem] = React.useState(false);
    const [isShowAdd, setIsShowAdd] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    setTimeout(() => {
        setTimeInfoCustomer(true);
    }, 1000);

    setTimeout(() => {
        setTimeInfoNews(true);
    }, 1500);

    setTimeout(() => {
        setTimeInfoLuotXem(true);
    }, 2000);

    React.useEffect(() => {

    }, [timeInfoCustomer, timeInfoNews, timeInfoLuotXem]);

    const handleShowAdd = () => {
        setIsShowAdd(true);
    }

    const handleShowHidden = () => {
        setIsShowAdd(false);
    }

    const InfoCustomer = () => {
        return (
            <Grid item xs={4} md={4}>
                <div className="item-impressive-left">
                    <div className="icon-impressive">
                        <img src='content/images/client.png' />
                    </div>
                    <div className="content-impressive">
                        <p>
                            <CountUp
                            className="account-balance"
                            start={0}
                            end={3255}
                            duration={2.75}
                            />
                        </p>
                        <p className = "info-content-left">KH??CH H??NG</p>
                    </div>
                </div>
            </Grid>
        )
    }

    const InfoNews = () => {
        return (
            <Grid item xs={4} md={4}>
                <div className="item-impressive-center">
                    <div className="icon-impressive">
                        <img src='content/images/news.png' />
                        {/* <FontAwesomeIcon icon="newspaper" fixedWidth className = "text-white"/> */}
                    </div>
                    <div className="content-impressive">
                        <p>
                            <CountUp
                            className="account-balance"
                            start={0}
                            end={556}
                            duration={2.75}
                            />
                        </p>
                        <p className = "info-content-center">B??I ????NG</p>
                    </div>
                </div>
            </Grid>
        )
    }

    const InfoLuotXem = () => {
        return (
            <Grid item xs={4} md={4}>
                <div className="item-impressive-right">
                    <div className="icon-impressive">
                        <img src='content/images/customer.png' />
                    </div>
                    <div className="content-impressive">
                        <p>
                            <CountUp
                            className="account-balance"
                            start={0}
                            end={17657}
                            duration={2.75}
                            />
                        </p>
                        <p className = "info-content-right">L?????T TRUY C???P</p>
                    </div>
                </div>
            </Grid>
        )
    }

    return (
        <>
            <div className="bg-search">
                <Grid item xs={12} container className="pd-top-30">
                    <Grid item xs={1} md={1}></Grid>
                    <Grid item xs={2} md={2}>
                        {/* <select name="cars" className="custom-select custom-nha-dat">
                        <option value="" selected>Lo???i nh?? ?????t</option>
                        <option value="volvo">?????t d??? ??n</option>
                        <option value="fiat">Nh?? ri??ng</option>
                    </select> */}
                        <Box>
                            <FormControl className="custom-box">
                                <InputLabel id="demo-simple-select-label">Lo???i nh?? ?????t123213</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Lo???i nh?? ?????t"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>Kh??ng ch???n</em>
                                    </MenuItem>
                                    <MenuItem value={20}>?????t d??? ??n</MenuItem>
                                    <MenuItem value={30}>Nh?? ri??ng</MenuItem>
                                    <MenuItem value={30}>Nh?? ph???, b???t</MenuItem>
                                    <MenuItem value={30}>Chung c??</MenuItem>
                                    <MenuItem value={30}>Kh??c</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Box>
                            <FormControl className="custom-box">
                                <InputLabel id="demo-simple-select-label">Tr??n to??n qu???c</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Tr??n to??n qu???c"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>Kh??ng ch???n</em>
                                    </MenuItem>
                                    <MenuItem value={20}>H??? Ch?? Minh</MenuItem>
                                    <MenuItem value={30}>H?? N???i</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Box>
                            <FormControl className="custom-box">
                                <InputLabel id="demo-simple-select-label">Di???n t??ch</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Di???n t??ch"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>Kh??ng ch???n</em>
                                    </MenuItem>
                                    <MenuItem value={20}>{"<50 m2"}</MenuItem>
                                    <MenuItem value={30}>{"50 m2 - 100 m2"}</MenuItem>
                                    <MenuItem value={30}>{"100 - 300 m2"}</MenuItem>
                                    <MenuItem value={30}>{"> 300 m2"}</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Box>
                            <FormControl className="custom-box">
                                <InputLabel id="demo-simple-select-label">Gi??</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Gi??"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>Kh??ng ch???n</em>
                                    </MenuItem>
                                    <MenuItem value={20}>{"< 500 tri???u"}</MenuItem>
                                    <MenuItem value={30}>{"500 tri???u - 800 tri???u"}</MenuItem>
                                    <MenuItem value={30}>{"800 tri???u - 1 t???"}</MenuItem>
                                    <MenuItem value={30}>{"1 t??? - 2 t???"}</MenuItem>
                                    <MenuItem value={30}>{"2 t??? - 4 t???"}</MenuItem>
                                    <MenuItem value={30}>{"> 4 t???"}</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        {!isShowAdd &&
                        (<><p className="text-white pd-top-15 dp-inline-block hover-cursor-pointer" onClick = {handleShowAdd}>Hi???n th??? th??m</p>
                        <FontAwesomeIcon icon="caret-down" fixedWidth className="text-white hover-cursor-pointer" onClick = {handleShowAdd}/>
                         </>) }
                    </Grid>
                    <Grid item xs={1} md={1}></Grid>
                </Grid>
                {isShowAdd && 
                    <Grid item xs={12} container className="mg-top-15">
                        <Grid item xs={1} md={1}></Grid>
                        <Grid item xs={2} md={2}>
                            <Box>
                                <FormControl className="custom-box">
                                    <InputLabel id="demo-simple-select-label">Ph?????ng x??</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Ph?????ng x??"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>Kh??ng ch???n</em>
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <Box>
                                <FormControl className="custom-box">
                                    <InputLabel id="demo-simple-select-label">???????ng ph???</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="???????ng ph???"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>Kh??ng ch???n</em>
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <Box>
                                <FormControl className="custom-box">
                                    <InputLabel id="demo-simple-select-label">S??? ph??ng</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="S??? ph??ng"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>Kh??ng ch???n</em>
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <Box>
                                <FormControl className="custom-box">
                                    <InputLabel id="demo-simple-select-label">H?????ng</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="H?????ng"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>Kh??ng ch???n</em>
                                        </MenuItem>
                                        <MenuItem value={20}>{"????ng"}</MenuItem>
                                        <MenuItem value={30}>{"T??y"}</MenuItem>
                                        <MenuItem value={30}>{"Nam"}</MenuItem>
                                        <MenuItem value={30}>{"B???c"}</MenuItem>
                                        <MenuItem value={30}>{"????ng - B???c"}</MenuItem>
                                        <MenuItem value={30}>{"T??y - Nam"}</MenuItem>
                                        <MenuItem value={30}>{"????ng - Nam"}</MenuItem>
                                        <MenuItem value={30}>{"T??y - Nam"}</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <p className="text-white pd-top-15 dp-inline-block hover-cursor-pointer" onClick = {handleShowHidden}>Thu g???n</p>
                            <FontAwesomeIcon icon="caret-up" fixedWidth className="text-white hover-cursor-pointer" onClick = {handleShowHidden}/>
                        </Grid>
                        <Grid item xs={1} md={1}></Grid>
                    </Grid>
                    }
                <Grid item xs={12} container className="mg-top-15">
                    <Grid item xs={1} md={1}></Grid>
                    <Grid item xs={9} md={9}>
                        <TextField id="outlined-basic" label="T??m ki???m ?????a ??i???m" variant="outlined" fullWidth />
                        {/* <input type="text" className="form-control" id="usr" placeholder = "T??m ki???m ?????a ??i???m"/> */}
                    </Grid>
                    <Grid item xs={2} md={2}></Grid>
                </Grid>
                {/* {!isShowAdd && 
                <Grid item xs={12} container className="mg-top-15 height-56"/>
                } */}
                <Grid item xs={12} container className="info-customer mg-top-15">
                    {timeInfoCustomer && InfoCustomer()}
                    {timeInfoNews && InfoNews()}
                    {timeInfoLuotXem && InfoLuotXem()}
                </Grid>
            </div>
        </>
    );
};

export default Home;
