/**
 * 
 */
package com.midas.stso.trade.dao;

import com.midas.stso.trade.po.Trade;

/**
 * @author yhh
 *
 */
public interface ITradeDAO {
	/**
	 * ���Ʊ
	 * @param trade
	 * @return �Ƿ���ɹ�
	 */
	public boolean buyStock(Trade trade);
	/**
	 *����Ʊ 
	 * @param trade
	 * @return �Ƿ���۳ɹ�
	 */
	public boolean sellStock(Trade trade);
	/**
	 * ��ѯ������Ϣ
	 * @param trade
	 * @return
	 */
	public Trade searchStock(Trade trade);

}
