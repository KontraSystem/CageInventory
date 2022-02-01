import React from "react";
import NavigationBar from "../components/NavigationBar";
import SearchBar from "../components/SearchBar";
import Card from '../components/InventoryCard';

export default function Inventory() {
    return (
        <div>
            <NavigationBar/>
            <h2 className="center-text">Inventory</h2>
            <div className="container">
                <SearchBar/>
                <div>
                    <Card/>
                    <Card/>
                </div>

            </div>
        </div>
    );
}
