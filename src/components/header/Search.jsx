// react imports
import { useState } from 'react';

//react redux import
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productAction';

// mui imports
import styled from '@emotion/styled';
import { InputBase, List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

// icon imports
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

//-------------custom mui styles------------------------//
const SearchContainer = styled(Box)({
  backgroundColor: 'white',
  width: '38%',
  borderRadius: '2px',
  marginLeft: '10px',
  display: 'flex',
});
const InputSearchBase = styled(InputBase)({
  width: '100%',
  paddingLeft: '10px',
  fontSize: 'unset',
});

const SearchIconWrapper = styled(SearchIcon)({
  color: '#2874f0',
  padding: '5px',
  display: 'flex',
});

const ListWrapper = styled(List)({
   position: 'absolute',
   backgroundColor: '#FFFFFF',
   color: 'black',
   marginTop: 36
})
//------xxxx-------custom mui styles----------xxxx-------------//

export default function Search() {
  const [text, setText] = useState('');

  //-------redux state and functions--------//
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  //-----xxx-------redux--------xxx--------//

  const getText = text => {
    setText(text);
    console.log(text);
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder='Search for products, brands and more'
        onChange={e => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {products
            .filter(product =>
              product.title.toLowerCase().includes(text.toLowerCase())
            )
            .map(product => (
              <ListItem>
                <Link to={`product/${product.id}`} onClick={()=>setText('')} style={{textDecoration: 'none',color: 'inherit'}}>{product.title}</Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
}
