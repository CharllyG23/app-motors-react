import React from "react";
import './Content.css'
import { MdOutlineTwoWheeler, MdDirectionsCar } from "react-icons/md";
import axios from "axios";


const Home = () => {

    return(
        <div className="container">
           <div className="box">
               <div className="tag-btn">
                    <div className="tag-letf">
                        <a href="/" className="btn-car"><MdDirectionsCar style={{ fontSize: '25', marginRight: '10' }} />Carros</a>
                        <a href="/" className="btn-moto"><MdOutlineTwoWheeler style={{ fontSize: '25', marginRight: '10' }} />Motos</a>
                    </div>
                    <button type="button" className="btn-sell">Vender meu carro</button>
               </div>
                <div className="search-wrapper">
                   <form className="form">
                        <div className="first-line">
                            <div className="input-checkbox">
                                <input id="teste1" type="checkbox" />
                                <label htmlFor="teste1">Novos</label>
                            </div>
                            <div>
                                <input id="teste2" type="checkbox" />
                                <label htmlFor="teste2">Usados</label>
                            </div>
                        </div>
                        <div className="second-line">
                                <div className="form1">
                                    <input type="text" id="search" name="search" className="input-geral input-search" placeholder="Onde: "/>
                                    <button type="reset">&times;</button>
                                
                                    <select id="country" name="country" className="main-select input-geral">
                                        <option value="australia">Raio:</option>
                                        <option value="australia">Australia</option>
                                        <option value="canada">Canada</option>
                                        <option value="usa">USA</option>
                                    </select>
                                </div>    
                            <div className="input-double">
                                <div>
                                    <select id="country" name="country" className="select-marca input-geral">
                                        <option value="australia">Australia</option>
                                        <option value="canada">Canada</option>
                                        <option value="usa">USA</option>
                                    </select>
                                </div>
                                <div>
                                    <select id="country" name="country" className="select-modelo input-geral">
                                        <option value="australia">Australia</option>
                                        <option value="canada">Canada</option>
                                        <option value="usa">USA</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="third-line">
                            <div className="select-double">
                                <select id="country" name="country" className="select-ano input-geral">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                </select>
                                <select id="country" name="country" className="select-price input-geral">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                </select>
                            </div>
                            <div>
                                <select id="country" name="country" className="select-version input-geral" >
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                </select>
                            </div>
                        </div>
                        <div className="fourth-line" >
                            <div className="p-search">
                                <span>Busca Avançada</span>
                            </div>
                            
                            <div className="btn-double">
                                <div>
                                    <button className="btn-filter">Limpar filtros</button>
                                </div>
                               <div>
                                    <button className="btn-offers">Ver Oferta</button>
                                </div>
                            </div>
                        </div>
                   </form>
                </div>
           </div>
        </div>
    );
}

export default Home;