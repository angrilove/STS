/**
 * 
 */
package com.midas.stso.entrust.dao;

import com.midas.stso.entrust.po.Entrust;

/**
 * @author yhh
 *
 */
public interface IEntrustDAO {
	/**
	 * ί�й����Ʊ
	 * @param entrust
	 * @return �Ƿ�ɹ�ί��
	 */
	public boolean  ebuyStock(Entrust entrust);
	/**
	 * ί��������Ʊ
	 * @param entrust
	 * @return �Ƿ�ɹ�ί��
	 */
	public boolean  esellStock(Entrust entrust);
	/**
	 * ί����Ϣ��ѯ
	 * @param entrust
	 * @return ί�н�����Ϣ
	 */
	public boolean  esearchStock(Entrust entrust);
	/**
	 * ��ҹ�ҵ����
	 * @param entrust
	 * @return �Ƿ�ҵ��ɹ�
	 */
	public boolean  edaybuyStock(Entrust entrust);
	/**
	 * ��ҹ�ҵ�����
	 * @param entrust
	 * @return �Ƿ�ҵ��ɹ�
	 */
	public boolean  edaysellStock(Entrust entrust);
	

}
