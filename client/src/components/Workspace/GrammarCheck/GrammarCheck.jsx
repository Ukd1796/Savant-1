import React from 'react'
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react'
import './GrammarCheck.css'
const GrammarChecker = () => {
  return (
    <GrammarlyEditorPlugin clientId="client_VNLG4h7QP3v4iqcJiaLmLt">
      <textarea rows='5' cols='53' className='textEditor'/>
    </GrammarlyEditorPlugin>
  )
}

export default GrammarChecker;