/**
 * 
 */
package com.midas.stso.optionalstock.dao;

import com.midas.stso.optionalstock.po.OptionalStock;

/**
 * @author yhh
 *
 */
public interface IOptionalStockDAO {
	/**
	 * ������ѡ��
	 * @param optionalStock
	 * @return �Ƿ���ӳɹ�
	 */
	public boolean insertOpS(OptionalStock optionalStock);
	/**
	 * ɾ����ѡ��
	 * @param optionalStock
	 * @return �Ƿ�ɾ���ɹ�
	 */
	public boolean deleteOps(OptionalStock optionalStock);
	/**
	 * ��ѯ��ѡ��
	 * @param optionalStock
	 * @return ������ѡ����Ϣ
	 */
	public OptionalStock searchOps(OptionalStock optionalStock);

}
