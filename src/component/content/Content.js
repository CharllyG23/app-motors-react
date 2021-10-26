import React from "react";
import './Content.css'
import { MdOutlineTwoWheeler, MdDirectionsCar } from "react-icons/md";

const Home = () => {

    return(
        <div className="container">
           <div className="box">
               <div className="tag-btn">
                    <div className="tag-letf">
                        <button href="#" className="btn-car"><MdDirectionsCar style={{ fontSize: '25', marginRight: '10' }} />Carros</button>
                        <button href="#" className="btn-moto"><MdOutlineTwoWheeler style={{ fontSize: '25', marginRight: '10' }} />Motos</button>
                    </div>

                       <button href="#" className="btn-sell">Vender meu carro</button>
               </div>
                <div className="search-wrapper">
                   <form className="form">
                        <div className="first-line">
                            <input type="checkbox" name="my-checkbox1" id="opt-in1"/>
                            <label htmlFor="opt-in1">Novo</label>
                            <input type="checkbox" name="my-checkbox2" id="opt-in2"/>
                            <label htmlFor="opt-in2">Usado</label>
                        </div>
                        <div className="second-line">
                            <div>
                                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                                <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                </select>
                            </div>
                            <div>
                                <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                </select>
                                <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                </select>
                            </div>
                        </div>
                        <div className="third-line">
                            <div>
                                <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                </select>
                                <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                </select>
                            </div>
                            <div>
                                <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                </select>
                            </div>
                        </div>
                        <div className="fourth-line">
                            <div>
                                <span>Busca Avançada</span>
                            </div>
                            <div>
                                <button href="#" >Limpiar filtros</button>
                                <button>Ver Oferta</button>
                            </div>
                        </div>
                   </form>
                </div>
           </div>
        </div>
    );
}

export default Home;