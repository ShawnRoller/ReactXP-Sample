import * as React from 'react';
import * as RX from 'reactxp';
import { Button } from '../controls/Button';
import { SearchTextField } from '../controls/SearchTextField';

interface POSearchPanelProps extends RX.CommonProps {
  onPressLogout: () => void;
}

interface POSearchPanelState {
  po: string;
}

const styles = {
  scrollStyle: RX.Styles.createScrollViewStyle({
    alignSelf: 'stretch',
    backgroundColor: '#f5fcff'
  }),
  containerStyle: RX.Styles.createViewStyle({
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }),
  headerTextStyle: RX.Styles.createTextStyle({
    fontSize: 72,
    color: '#333fff'
  }),
  buttonStyle: {
    margin: 16,
    borderRadius: 6,
    backgroundColor: 'yellow',
    width: 300
  },
  buttonTextStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
    color: 'red'
  }
};

export class POSearchPanel extends RX.Component<POSearchPanelProps, POSearchPanelState> {

  readonly state: POSearchPanelState = {
    po: ''
  };

  render() {
    return (
      <RX.View useSafeInsets={ true }>
        <RX.ScrollView style={ styles.scrollStyle }>
          <RX.View style={ styles.containerStyle }>
            <RX.Text style={ styles.headerTextStyle }>
              PO List
            </RX.Text>

            <SearchTextField
              value= { this.state.po }
              onChangeText= { this._onChangeSearchText }
              placeholder={ 'PO Search...'}
            />

            <Button
              title='Logout'
              onPress= { this._onPressLogout }
            />

          </RX.View>
        </RX.ScrollView>
      </RX.View>
    );
  }

  private _onPressLogout = () => {
    this.props.onPressLogout();
  }

  private _onChangeSearchText = (text: string) => {
    this.setState({ po: text });
  }

}
