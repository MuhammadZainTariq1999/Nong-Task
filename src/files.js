import React  from "react";

import './file.css';
import {file} from './file';
import {Card ,CardColumns} from 'react-bootstrap';

 const  newdata= file.map( ( file) =>{
                  return  (
                    
                    <Card className="card" key= {file.id}>
                      <Card.Body>
                        <Card.Text className="text">
                              {file.name}
                        </Card.Text>
                      </Card.Body>
                    </Card> 
                  
                  );
                }
              );
const Files = () => {
	   
              return( <CardColumns> <h1>Previous Files </h1>{newdata}  </CardColumns>);
};

export default Files;