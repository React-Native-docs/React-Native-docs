import styled from '@emotion/native';
import React from 'react';
import { View, TextInput } from 'react-native';
import { AllText } from '../../constants/allText';
import { Input } from './SearchInput.styles';

export default SearchInput = (props) => {
	const { setSearchValue, searchValue, setSearchResult } = props;
	const onEndEditing = () => {
		const result = [
				// 반환값 {array[]}
				// pageTitle: '',
				// pageName: '',
				// string: '',
		];
		for (const [pageTitle, pageNameList] of Object.entries(AllText)) {
			for (const [pageName, text] of Object.entries(pageNameList)) {
				const string = JSON.stringify(text);
				const index = string.indexOf(searchValue);
				const indexMax = string.length;
				if (string != '{}' && index != -1)
					result.push({
						pageTitle: pageTitle,
						pageName: pageName,
						string: string.slice(index, (index + 300 > indexMax)? indexMax : index + 300)
					})
			}
		}
		setSearchResult(result);
	}
	return (
		<>
			<Input
				placeholder={"검색할 내용을 입력해주세요."}
				placeholderTextColor={'white'}
				returnKeyType={'search'}
				onEndEditing={onEndEditing}
				onChangeText={(t) => setSearchValue(t)}
				value={searchValue}
			/>
		</>
	);
};