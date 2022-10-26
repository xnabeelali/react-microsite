import React, { useEffect, useState, useRef } from 'react';
import { revealAnimation } from "../../gsap/gsap";
import Select from 'react-select';
import galleryData from '../../data/api';
import { IconClose, IconPlus } from '../../assets/images/svg';

const FilterGrid = () =>{

    const optionsEntities = [
        { value: 'one', label: 'Entity one' },
        { value: 'two', label: 'Entity two' },
        { value: 'three', label: 'Entity three' },
        { value: 'four', label: 'Entity four' },
    ];

    const optionsYears = [
        { value: 'any', label: 'Any' },
        { value: '2023', label: '2023' },
        { value: '2024', label: '2024' },
        { value: '2025', label: '2025' },
        { value: '2026', label: '2026' },
        { value: '2027', label: '2027' },
        { value: '2028', label: '2028' },
        { value: '2029', label: '2029' },
        { value: '2030', label: '2030' },
        { value: '2031', label: '2031' },
        { value: '2032', label: '2032' },

    ];


    let column2 = useRef(null);
    let gallery = useRef(null);

    useEffect(() => {
        revealAnimation(column2);
        revealAnimation(gallery);
    }, []);


    const [ galleryItems, setGalleryItems ] = useState(galleryData);
    const [ yearFilter, setYearFilter ] = useState('any');
    const [ themeFilter, setThemeFilter ] = useState([]);

    const handleChangeYear = (selected) => { 
            setYearFilter(selected.value);
      };

    const handleChangeTheme = (e, theme) => { 
        const Elem = e.target;
        if(Elem.classList.contains('active')) {
            const newArr = themeFilter.filter(item => item !== theme)
            Elem.classList.remove('active');
            setThemeFilter(newArr)
           
        } else {
            Elem.classList.add('active');
            setThemeFilter([...themeFilter, theme])
        }
    };
    
    const openPopup = e => {
        e.preventDefault();
        const $element = e.target;
        const $targetElem = document.getElementById($element.dataset.target);
        const $gallery = document.getElementById('filter-gallery');
        $targetElem.classList.add('open');
        $gallery.classList.add('expanded');
      };

      const closePopup = e => {
        e.preventDefault();
        const $element = e.target;
        const $targetElem = document.getElementById($element.dataset.target);
        const $gallery = document.getElementById('filter-gallery');
        $targetElem.classList.remove('open');
        $gallery.classList.remove('expanded');
      };


    return (
    <div className="filterGrid">
        <div className='twoColContent'>
          <div className='col '>
            <div className='form-group mb-8 lg:mb-20 '>
                <Select classNamePrefix="customSelect"  options={optionsEntities} required placeholder="Entities"/>
            </div>
            <div className='form-group mb-8 lg:mb-20 max-w-[536px]'>
                <Select classNamePrefix="customSelect" onChange={handleChangeYear} options={optionsYears} required placeholder="Completion year"/>
            </div>
          </div>
          <div className='col gs_reveal' ref={(el) => (column2 = el)}>
            <div className="filter-tags-wrapper">
                <h3 className="filter-tags-label">FILTER BY THEME:</h3>
                <ul className="filter-tags-list">
                    <li className="filter-tag" onClick={e => handleChangeTheme(e, 'energy')}>Energy efficiency</li>
                    <li className="filter-tag" onClick={e => handleChangeTheme(e, 'water')}>Water</li>
                    <li className="filter-tag" onClick={e => handleChangeTheme(e,'clean-energy')}>Clean energy</li>
                    <li className="filter-tag" onClick={e => handleChangeTheme(e, 'innovation')}>Innovation</li>
                    <li className="filter-tag" onClick={e => handleChangeTheme(e, 'recycling')}>Recycling</li>
                    <li className="filter-tag disabled">Planting trees</li>
                    <li className="filter-tag disabled">Marine protection</li>
                    <li className="filter-tag disabled">Land protection</li>
                    <li className="filter-tag disabled">Biodiversity</li>
                    <li className="filter-tag disabled">Education</li>
                    <li className="filter-tag disabled">Regulation</li>
                    <li className="filter-tag disabled">Cities</li>
                </ul>
            </div>
             
          </div>
      </div>
      <div className='gallery gs_reveal' ref={(el) => (gallery = el)}>
            <ul className='gallery-list' id="filter-gallery">
                {
                    galleryItems.map((item,index) => (
                        (yearFilter === item.year || yearFilter === "any" ) &&
                        (themeFilter.includes(item.theme) || !themeFilter.length ) &&
                        <li className='gallery-item' key={index} id={`item-`+item.id}>
                        <div className='inner-wrapper'>
                            <div className='img-wrapper'>
                                <img className='gallery-img' src={item.image} alt="alt-text"/>
                            </div>
                            <div className='content-wrapper'>
                                <h4 className='heading'>{item.year}</h4>
                                <p className='desc'>{item.description}</p>
                            </div>
                            <div className='content-wrapper detail-wrapper'>
                                <h4 className='heading'>The Inititive</h4>
                                <h5 className='subtitle'>{item.details.initiative}</h5>
                                <p className='desc'>{item.details.initiativeDesc}</p>
    
                                <h4 className='heading'>Project Completion year</h4>
                                <h5 className='subtitle'>{item.completetionYear}</h5>
    
                                <h4 className='heading'>Progress update</h4>
                                <h5 className='subtitle'>{item.details.completetionYear}</h5>
                                <p className='desc'>{item.details.progress}</p>
                            </div>
                            <button className='btn-open anchor-round ' data-target={`item-`+item.id} onClick={e => openPopup(e)}><IconPlus/></button>
                            <button className='btn-close anchor-round' data-target={`item-`+item.id} onClick={e => closePopup(e)}><IconClose/></button>
                        </div>
                    </li>
                
                    ))
                }
            </ul>
      </div>
    </div>
      
    );
  }
  
  export default FilterGrid;
  