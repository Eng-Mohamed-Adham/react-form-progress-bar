import { Card, CardContent, Grid, TextField } from "@material-ui/core";
import useFormContext from "../hooks/useFormContext";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const SignUp2 = () => {

    const { data, handleChange } = useFormContext();

    const content = (
        <Card style={{maxWidth:450,margin:'0 auto',padding:'20px 5px',background:'red'}}>
          
            <CardContent>
            

                <Grid container spacing={1}>
                    <Grid  xs={12}  item >
            {/* <div className="split-container"> */}
                <div className="flex-col">
                    <label htmlFor="sameAsBilling">
                    <TextField
                        // variant="outlined"
                        // fullWidth
                        // required
                        type="checkbox"
                        id="sameAsBilling"
                        name="sameAsBilling"
                        checked={data.sameAsBilling}
                        onChange={handleChange}
                    />
                    Same as Billing Address</label>
                </div>
                
                    
                
            </Grid>

                <Grid  xs={12} sm={6} item >
                            <div className="flex-col">
                                    <label htmlFor="shipFirstName">First Name</label>
                                    <TextField
                                        label='shipFirstName'
                                        variant="outlined"
                                        fullWidth
                                        required
                                        type="text"
                                            id="shipFirstName"
                                            name="shipFirstName"
                                            placeholder="Jane"
                                            pattern="([A-Z])[\w+.]{1,}"
                                            value={data.shipFirstName}
                                            onChange={handleChange}
                                            disabled={data.sameAsBilling}
                                    />
                                </div>
                    </Grid>


                    

                    <Grid  xs={12} sm={6} item >
                            <div className="flex-col">
                                    <label htmlFor="shipFirstName">Last Name</label>
                                    <TextField
                                        label='shipFirstName'
                                        variant="outlined"
                                        fullWidth
                                        required
                                        type="text"
                                            id="shipFirstName"
                                            name="shipFirstName"
                                            placeholder="Jane"
                                            pattern="([A-Z])[\w+.]{1,}"
                                            value={data.shipFirstName}
                                            onChange={handleChange}
                                            disabled={data.sameAsBilling}
                                    />
                                </div>
                    </Grid>
                    
                <Grid xs={12} sm={6} item>
                    <div className="flex-col">
                    <label htmlFor="shipLastName" >2nd Address line</label>
                    <TextField
                    label='shipLastName'
                    variant="outlined"
                    fullWidth
                    required
                    type="text"
                            id="shipLastName"
                            name="shipLastName"
                            placeholder="Doe"
                            pattern="([A-Z])[\w+.]{1,}"
                            value={data.shipLastName}
                            onChange={handleChange}
                            disabled={data.sameAsBilling}
                    />
                    </div>
            
                </Grid>
                <Grid xs={12} sm={6} item>
                <div className="flex-col">

                    <label htmlFor="shipAddress1" >2nd Address line</label>
                    <TextField
                        label='shipAddress1'
                        variant="outlined"
                        fullWidth
                        required
                        type="text"
                        id="shipAddress1"
                        name="shipAddress1"
                        placeholder="555 Wallaby Way"
                        pattern="[\w\d\s.#]{2,}"
                        value={data.shipAddress1}
                        onChange={handleChange}
                        disabled={data.sameAsBilling}
                    />
                </div>
                </Grid>
                <Grid xs={12} sm={6} item>
                <div className="flex-col">
                <label htmlFor="shipAddress2">City</label>
                <TextField
                    label='Address2'
                    variant="outlined"
                    fullWidth
                    required
                    type="text"
                    id="shipAddress2"
                    name="shipAddress2"
                    placeholder="Apt. 2"
                    pattern="[\w\d\s.#]{2,}"
                    value={data.shipAddress2}
                    onChange={handleChange}
                    disabled={data.sameAsBilling}
                />


                </div>

                </Grid>
                <Grid xs={12} sm={6} item>
                    <div className="flex-col">

                        <label htmlFor="shipCity">Zip Code</label>
                        <TextField
                            label='Address2'
                            variant="outlined"
                            fullWidth
                            required
                            type="text"
                            id="shipCity"
                            name="ship-city"
                            placeholder="New York"
                            pattern="([A-Z])[\w\s.]{1,}"
                            value={data.shipCity}
                            onChange={handleChange}
                            disabled={data.sameAsBilling}
                        />
                        
                    </div>
                </Grid>

            

                <Grid xs={12} sm={6} item>
                    <div className="flex-col">
                        <label htmlFor="shipState">State</label>
                        <FormControl fullWidth>

                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                        id="shipState"
                        name="shipState"
                        value={data.shipState}
                        onChange={handleChange}
                        disabled={data.sameAsBilling}

                            >
                                <MenuItem value="AL">Alabama</MenuItem>
                                <MenuItem value="AK">Alaska</MenuItem>
                                <MenuItem value="AZ">Arizona</MenuItem>
                                <MenuItem value="AR">Arkansas</MenuItem>
                                <MenuItem value="CA">California</MenuItem>
                                <MenuItem value="CO">Colorado</MenuItem>
                                <MenuItem value="CT">Connecticut</MenuItem>
                                <MenuItem value="DE">Delaware</MenuItem>
                                <MenuItem value="DC">District Of Columbia</MenuItem>
                                <MenuItem value="FL">Florida</MenuItem>
                                <MenuItem value="GA">Georgia</MenuItem>
                                <MenuItem value="HI">Hawaii</MenuItem>
                                <MenuItem value="ID">Idaho</MenuItem>
                                <MenuItem value="IL">Illinois</MenuItem>
                                <MenuItem value="IN">Indiana</MenuItem>
                                <MenuItem value="IA">Iowa</MenuItem>
                                <MenuItem value="KS">Kansas</MenuItem>
                                <MenuItem value="KY">Kentucky</MenuItem>
                                <MenuItem value="LA">Louisiana</MenuItem>
                                <MenuItem value="ME">Maine</MenuItem>
                                <MenuItem value="MD">Maryland</MenuItem>
                                <MenuItem value="MA">Massachusetts</MenuItem>
                                <MenuItem value="MI">Michigan</MenuItem>
                                <MenuItem value="MN">Minnesota</MenuItem>
                                <MenuItem value="MS">Mississippi</MenuItem>
                                <MenuItem value="MO">Missouri</MenuItem>
                                <MenuItem value="MT">Montana</MenuItem>
                                <MenuItem value="NE">Nebraska</MenuItem>
                                <MenuItem value="NV">Nevada</MenuItem>
                                <MenuItem value="NH">New Hampshire</MenuItem>
                                <MenuItem value="NJ">New Jersey</MenuItem>
                                <MenuItem value="NM">New Mexico</MenuItem>
                                <MenuItem value="NY">New York</MenuItem>
                                <MenuItem value="NC">North Carolina</MenuItem>
                                <MenuItem value="ND">North Dakota</MenuItem>
                                <MenuItem value="OH">Ohio</MenuItem>
                                <MenuItem value="OK">Oklahoma</MenuItem>
                                <MenuItem value="OR">Oregon</MenuItem>
                                <MenuItem value="PA">Pennsylvania</MenuItem>
                                <MenuItem value="RI">Rhode Island</MenuItem>
                                <MenuItem value="SC">South Carolina</MenuItem>
                                <MenuItem value="SD">South Dakota</MenuItem>
                                <MenuItem value="TN">Tennessee</MenuItem>
                                <MenuItem value="TX">Texas</MenuItem>
                                <MenuItem value="UT">Utah</MenuItem>
                                <MenuItem value="VT">Vermont</MenuItem>
                                <MenuItem value="VA">Virginia</MenuItem>
                                <MenuItem value="WA">Washington</MenuItem>
                                <MenuItem value="WV">West Virginia</MenuItem>
                                <MenuItem value="WI">Wisconsin</MenuItem>
                                <MenuItem value="WY">Wyoming</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                </Grid>

                
            


                    </Grid>
        </CardContent>

    </Card>
    )
    return content ;
}
 
export default SignUp2;