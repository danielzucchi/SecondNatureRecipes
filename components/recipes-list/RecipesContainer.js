import { connect } from 'react-redux';
import RecipesScreen from './RecipesScreen';

const mapStateToProps = ({ content }, ownProps) => {
  const { isLoading, recipes, error } = content;

  return {
    recipes,
    isLoading,
    error,
    ...ownProps,
  };
};

export default connect(mapStateToProps)(RecipesScreen);
