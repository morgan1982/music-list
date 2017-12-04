import React from 'react';
import { Card, CardBlock, CardText } from 'reactstrap';

const Sidebar = () => {

    return (

        <aside className="col-sm-12 col-md-4">
            <Card>
                <CardBlock>
                    <CardText>SideBar Item</CardText>
                </CardBlock>
            </Card>
        </aside>
        );
}


export default Sidebar;
