import styled from '@emotion/native';
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text } from 'react-native-svg';
import { Container, MainButton, LearnButton, OriginalButton, MainBanner, ContentView, GithubView, GithubButton, BlockView, LogoText } from '../../screens/Home/Home.styles';
export default SearchArea = (props) => {
	const { searchResult, navigation } = props;
	const ContentBlock = (props) => {
		return (
			<BlockView onPress={() => navigation.navigate('Detail', { pageTitle: props.pageTitle, pageName: props.pageName })}>
				<BlockView.Left>
					<BlockView.Title>{props.title} {'>'} {props.pageName}</BlockView.Title>
					<BlockView.Text>
						{props.subtitle}
					</BlockView.Text>
				</BlockView.Left>
				<BlockView.Right>
					<BlockView.RightText>
						{'>'}
					</BlockView.RightText>
				</BlockView.Right>
			</BlockView>
		);
	};
	console.log(searchResult)
	return (
		<ContentView>
			{
				searchResult.map((data, i) => 
					<ContentBlock
						key={i}
						title={data.pageTitle}
						subtitle={data.string}
						pageTitle={data.pageTitle}
						pageName={data.pageName}
                />
				)
			}
		</ContentView>
	);
};

                