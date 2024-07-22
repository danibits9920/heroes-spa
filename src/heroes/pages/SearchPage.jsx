import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm"

import queryString  from "query-string"
import { getHeroByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";




export const SearchPage = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const {q = ''} = queryString.parse( location.search );

  const heroes = getHeroByName(q);


  const showSearch = (q.length===0)
  const showError = (q.length > 0 && heroes.length===0)

  

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const handleSearchSubmit = (event) =>{
      event.preventDefault();




      navigate(`?q=${ searchText.toLowerCase()}`)

    }

  return (
    <>
        <h1>Search</h1>
        <hr />

        <div className="row">
          <div className="col-5">
            <h4>Searching...</h4>
            <hr />

            <form onSubmit={ handleSearchSubmit }>
              <input 
              type="text" 
              className="form-control"
              placeholder="Search a Hero"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
              
              />

              <button className="btn btn-outline-primary mt-1">
                Search
              </button>

            </form>

          </div>


      
        <div className="col-7">
          <h4>Result</h4>
          <hr />


          {/* { //primera forma:
            (q === '')? <div className="alert alert-primary">Search a Hero</div>
            :(heroes.length === 0)&& <div className="alert alert-danger">No hero with <b>{q}</b></div>
          } */}

          {/* segunda forma */}

          <div className="alert alert-primary" style={{display: showSearch ? '':'none'}}>Search a Hero</div>
          <div className="alert alert-danger"  style={{display: showError ? '':'none'}}>No hero with <b>{q}</b></div>


            {
              
              heroes.map( hero => {

                return <HeroCard key={ hero.id } {...hero} />
                
              })

              
            }


        </div>



      </div>


    </>
  )
}
