


export const reducer=(state,action)=>{

    if(action.type === 'OGE_EKLE'){
      const yeniInsanlar=[...state.people,action.payload]
      return {
        ...state,
        people:yeniInsanlar,
      isModalOpen:true,
    modalContent:'oge eklendi',
  }
    }
    if(action.type ==='DEGER_YOK') {
      return {...state,isModalOpen:true,modalContent:'lutfen bir deger giriniz'}
    }
  
    if(action.type === 'MODAL_KAPAT'){
      return {...state,isModalOpen: false}
    }
  
    if (action.type === 'OGEYI_KALDIR'){
      const yeniInsanlar = state.people.filter((kisi)=> kisi.id !== action.payload)
      return {...state,people:yeniInsanlar}
    }
    throw new Error('eslesen eylem turu yok')
  }
  