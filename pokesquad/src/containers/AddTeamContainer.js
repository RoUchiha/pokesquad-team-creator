import React, { Component } from 'react';
import '../App.css'
import AddNewTeam from "../components/AddTeam";
import Pokedex from "./Pokedex";
import { Container } from 'semantic-ui-react'


class AddTeamContainer extends Component {


    render() {

        return (
            <Container>
                <AddNewTeam />

                <br />


                <Pokedex />

            </Container>
        )
    }

}




export default AddTeamContainer;